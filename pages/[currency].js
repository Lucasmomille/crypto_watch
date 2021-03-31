export default function Currency(res){
    console.log(res);
    return (
        <div>
            <h1>Currecy</h1>
        </div>
    )
}

export async function getServerSideProps({ query }){
    try {
        const res = await fetch(
            `https://api.nomics.com/v1/currencies?key=beba8174ea4c8d1ff5c042b4ebdbaa86&ids=${query.currency}&attributes=id,name,logo_url,description`
        );
        const result = await res.json();
        return {
            props: { res: result[0] },
        };
    } catch (err){
        console.error(err);
    }
}