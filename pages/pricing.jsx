import Link from 'next/link';
import { MainLayout } from '@/components/layouts/MainLayout';
import { DarkLayout } from '../components/layouts/DarkLayout'

export default function PricingPage() {
  return (
    <>
        <h1>Paging page</h1>
        <div className={'description'}>
          <p>
            Get started by editing&nbsp;
            <code className={'code'}>pages/pricing.jsx</code>
          </p>
          <div>
            <Link href="/">Ir a Home</Link>
          </div>
        </div>
    </>
  )
}

PricingPage.getLayout = function getLayout( page ) {
  return (
    <MainLayout>
        <DarkLayout>
          {page}
        </DarkLayout>
    </MainLayout>
  )
}