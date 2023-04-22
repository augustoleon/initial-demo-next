import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout'

export default function AboutPage() {
  return (
    <>
        <h1>About page</h1>
        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/about.jsx</code>
          </p>
          <div>
            <Link href="/">Ir a Home</Link>
          </div>
        </div>
    </>
  )
}

AboutPage.getLayout = function getLayout( page ) {
  return (
    <MainLayout>
        <DarkLayout>
          {page}
        </DarkLayout>
    </MainLayout>
  )
}