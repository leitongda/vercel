import { useState } from 'react'
import useSWR from 'swr'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import siteStyles from '../styles/site.module.scss'

export default function Home() {
  const [active, setActive] = useState('')

  return (
    <>
      <Head>
        <title>四川比盟科技有限公司</title>
      </Head>
      <header className={siteStyles.header}>
        <Link href="/">
          <Image
            src="/images/logo.png"
            alt="比盟科技"
            title="四川比盟科技有限公司"
            width={200}
            height={40}
          />
        </Link>
        <ul className={siteStyles.menu}>
          <ol onClick={() => setActive('')} className={active === '' ? siteStyles.active : ''}>
            <Link href="/"><a>首页</a></Link>
          </ol>
          <ol onClick={() => setActive('product')} className={active === 'product' ? siteStyles.active : ''}>
            <Link href="#product"><a>产品及服务</a></Link>
          </ol>
          <ol onClick={() => setActive('example')} className={active === 'example' ? siteStyles.active : ''}>
            <Link href="#example"><a>重点案例</a></Link>
          </ol>
          <ol onClick={() => setActive('technology')} className={active === 'technology' ? siteStyles.active : ''}>
            <Link href="/technology"><a>技术支持</a></Link>
          </ol>
          <ol onClick={() => setActive('about')} className={active === 'about' ? siteStyles.active : ''}>
            <Link href="#about"><a>关于比盟</a></Link>
          </ol>
        </ul>
      </header>

      <Image
        src="/images/banner1.png"
        alt="轮播图"
        width="1920"
        height="820"
      />
    </>
  )
}