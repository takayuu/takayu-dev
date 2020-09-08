import React from 'react'
import Link from 'next/link'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import HeadingPage from '../components/atoms/HeadingPage'
import { FiArrowUp } from 'react-icons/fi'

const Thanks: NextPage = () => {
  const router = useRouter()
  const { name } = router.query

  return (
    <section className="text-center">
      <HeadingPage>Thank you!!</HeadingPage>
      <div className="mt-12">
        <p className=" text-xs whitespace-no-wrap leading-loose sm:text-sm">
          お問い合わせいただきありがとうございます。
          <br />
          お問い合わせの内容を確認次第、
          <wbr />
          {name}様宛にご返信をいたします。
          <br />
          お急ぎの場合は
          <a
            className="text-blue-600 font-medium hover:text-blue-400 transition-navigation"
            href="https://twitter.com/imatchapro"
            target="_blank"
            rel="noreferrer"
          >
            Twitter
          </a>
          のDMも開放しているので、
          <wbr />
          お気軽にメッセージを送ってください。
        </p>
      </div>
      <div className="mt-12">
        <Link href="/">
          <a className="icon-button transition-navigation">
            <FiArrowUp />
            <span className="ml-2">トップページ</span>
          </a>
        </Link>
      </div>
    </section>
  )
}

export default Thanks