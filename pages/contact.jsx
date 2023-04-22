import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';

export default function ContactPage() {
  return (
    <>
      <h1>Contact page</h1>
      <div className={'description'}>
        <p>
          Get started by editing&nbsp;
          <code className={'code'}>pages/contact.jsx</code>
        </p>
        <div>
          <Link href="/">Ir a Home</Link>
        </div>
      </div>
    </>
  )
}

ContactPage.getLayout = function getLayout( page ) {
  return (
    <MainLayout>
          {page}
    </MainLayout>
  )
}
