import Link from 'next/link';
import { MainLayout } from "@/components/layouts/MainLayout";

export default function Home() {
  // Next/head nos permite agregar cualquier elemento que pertenezca a la etiqueta <head></head>
  return (
    <>
      <h1>Home page</h1>
      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/index.jsx</code>
        </p>
        <div>
          <Link href="/about">Ir a About</Link>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout( page ) {
  return (
    <MainLayout>
        {page}
    </MainLayout>
  )
}
