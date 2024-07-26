import React from 'react'
import logo from '../assets/logo.png'
import './Header.scss'

const Header = () => {
  return (
    <div className='headerContainer'>
      <section className='headerLogo'>
        <img src={logo} alt="Logo" />
        <h1 className='titleHeader'>PhotoSearch</h1>
      </section>
      <section className='headerMenuContainer'>
        <img className='headerMenu' src="https://s3-alpha-sig.figma.com/img/28ad/c744/58115b6c80097edc5830ef8f2128d0a9?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Br~k5cczGnupvpASGULum51wsEOqReUJ8MHV856iv1nV9aQabo41mqX-yUFtPqAp1QnCeFbTBJ-dA~8gNzeZCSAiyp7uouDxUHYp4YjuRlUR2z2f61jxgU87X6xyKu~f-mCBrkUQOMML8HQUKnmVwwLLMyGAfZ5P0q5QIXIrQtwaB6KhQzDyIH~Cm34S74wQRf1cJkPG9yF3Tu6Nht4au0yoR-7PftwG7wkdus8l-celO-WjVCTeAuevjzXLQ7v7lojr7f8PXkNps1OjCMTzQo1O2iVb8v2-iTh6zOqDmJLEeOwLMHVPzNgt-OF3J~ll114E6eEXNhcZHI9vTXLCPw__" alt="Menu" />
      </section>
    </div>
  )
}

export default Header
