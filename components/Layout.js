import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

export default function Layout({ children, page }) {
    return (
      <div className="bg-blue-50 pt-5 text-center min-h-screen">
        <Head>
          <title>{page}</title>
        </Head>
        <header className="container-lg">
          <h1 className="text-5xl mb-2">CRYPTO-WATCH</h1>
          <div className="inline-grid grid-cols-2 gap-x-10 p-4">
            <Link href="/">
              <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
                Accueil
              </button>
            </Link>
            <Link href="/about">
              <button className="bg-blue-200 p-3 m-2 rounded-3xl hover:shadow-md border-2 border-blue-300">
                A propos
              </button>
            </Link>
          </div>
          <div> {/* utiliser le composant image de next permet un meilleur rendu web (voir F12 -> reseaux) on peut aussi lui mettre qulaity, lazy etc */}
            <Image src="/blockchain.jpg" alt="footer-pic" width="400" height="25" className="rounded-3xl object-cover object-center"></Image>
          </div>
        </header>
        <main className="pt-4 mx-20">
          {children}
        </main>
        <footer className="p-10">
        <Image src="/blockchain.jpg" alt="footer-pic" width="1000" height="30" className="rounded-3xl object-cover object-center"></Image>
        <ul className="pt-10 pb-4 flex justify-around">
          <li>A propos</li>
          <li>Qui sommes-nous</li>
          <li>Agence</li>
        </ul>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque autem, doloremque id beatae deleniti temporibus! Fugit at laborum quos quae. Doloribus rerum ab deserunt at numquam quod eius explicabo. Sit?</p>
        

        </footer>
        </div>
    )
}