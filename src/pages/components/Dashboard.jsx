import React from 'react'
import img from "./img.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGreaterThan,faFolderOpen,faChevronCircleRight,faComments,faEllipsisVertical,faLessThan } from '@fortawesome/free-solid-svg-icons';

const Dashboard = (darkMode) => {
  return (
    <div className=' pt-10 ' >
    <div className={`flex justify-between ${darkMode ? 'text-gray-500' : 'text-white'}`}>
    <div className='flex text-gray-500 text-sm'>
      <FontAwesomeIcon icon={faFolderOpen} className='text-gray-300 pl-0 pr-3 pt-2 text-xs'/>
      <FontAwesomeIcon icon={faLessThan} className='text-gray-300  pr-1 text-xs pt-2'/>
      <FontAwesomeIcon icon={faGreaterThan} className='text-gray-300 text-xs pr-2 pt-2' />
      <ul className='flex' style={{ flexWrap: 'nowrap' }}>
          <li className={`pl-3 pt-1 text-sm ${darkMode ? 'text-gray-500' : 'text-white'}`} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            <FontAwesomeIcon icon={faChevronCircleRight} className='text-xs text-gray-300 pr-1'/>
👋 Getting Started
          </li>
      </ul>
      </div>
      <div className={`flex flex-grow justify-end  text-sm ${darkMode ? 'text-gray-500' : 'text-white'}`}>
        <a href='/share'><span className='pl-2 pt-1'>Share</span></a>
        <a href='/comments'><span className='pl-2 pt-1'><FontAwesomeIcon icon={faComments} /></span></a>
        <a href='/rate-us'><span className='pl-2 pt-1'>⭐</span></a>
        <a href='/more'><span className='pl-2 pt-1 pr-1'><FontAwesomeIcon icon={faEllipsisVertical} /></span></a>
      </div>
  </div>
      <h1 style={{fontSize:"2.4rem",textWrap:"wrap",paddingTop:"1rem"}}>👋 Getting Started</h1>
      <div className={`h-auto w-50 p-2  text-sm rounded-md m4 p-3 ${darkMode ? 'bg-gray-200 text-black' : 'bg-gray-100 text-white'} mt-10 mb-5`}>
        <p className='text-gray-500' style={{fontSize:"1rem",textWrap:"wrap"}}>🔒This doc is in your private channel, where you can store your private work. You can share docs one by one from here, but to properly organize your team's knowledge base, use workspace channels.<br/>
You can make channels public to make all docs visible to everyone on the team, or
private if you want the channel's docs to only be visible by a selection of teammates.</p>
      </div>
      <h2 style={{fontSize:"1.8rem",marginBottom:"2rem"}}>Collaborate with your team with these three features</h2>
      <h3 style={{fontSize:"1.5rem",marginBottom:"1rem"}}>✍ Docs</h3>
<div className='flex justify-center mb-14'>
<img src={img} alt='feature' width="75%" height="auto"/>

</div>
<form className="max-w-md mx-auto">   
          <label htmlFor="default-search" className={`mb-2 text-sm font-medium sr-only ${darkMode ? 'text-white' : 'text-black'}`}>Search</label>
          <div className="relative">
          <input
  type="search"
  id="default-search"
  className={`block w-full p-3 pr-16 ps-2 text-xs border border-gray-300 rounded-lg focus:ring-gray-500 focus:border-gray-500 dark:border-gray-600 dark:placeholder-gray-400 dark:focus:border-gray-500 ${darkMode ? 'text-black bg-gray-700 dark:bg-gray-100' : 'text-black bg-gray-100 dark:bg-gray-100'} mb-10`}
  placeholder="💡 Give it a go by typing / below"
  required
/>

          </div>
      </form>
      <h3 style={{fontSize:"1.5rem",marginBottom:"2rem"}}>Features</h3>
      <ul>
      <li className='mb-5'>Lorem p adalah contoh teks atau dummy dalam industri percetakan dan penataan huruf atau typesetting. Lorem Ipsum telah menjadi standar contoh teks sejak tahun 1500an, saat seorang tukang cetak yang tidak dikenal mengambil sebuah kumpulan teks dan mengacaknya untuk menjadi sebuah buku contoh huruf. Ia tidak hanya bertahan selama 5 abad, tapi juga telah beralih ke penataan huruf elektronik, tanpa ada perubahan apapun. Ia mulai dipopulerkan pada tahun 1960 dengan diluncurkannya lembaran-lembaran Letraset yang menggunakan kalimat-kalimat dari Lorem Ipsum, dan seiring munculnya perangkat lunak Desktop Publishing seperti Aldus PageMaker juga memiliki versi Lorem Ipsum.</li>
      <li className='mb-5'>Ada banyak variasi tulisan Lorem Ipsum yang tersedia, tapi kebanyakan sudah mengalami perubahan bentuk, entah karena unsur humor atau kalimat yang diacak hingga nampak sangat tidak masuk akal. Jika anda ingin menggunakan tulisan Lorem Ipsum, anda harus yakin tidak ada bagian yang memalukan yang tersembunyi di tengah naskah tersebut. Semua generator Lorem Ipsum di internet cenderung untuk mengulang bagian-bagian tertentu. Karena itu inilah generator pertama yang sebenarnya di internet. Ia menggunakan kamus perbendaharaan yang terdiri dari 200 kata Latin, yang digabung dengan banyak contoh struktur kalimat untuk menghasilkan Lorem Ipsun yang nampak masuk akal. Karena itu Lorem Ipsun yang dihasilkan akan selalu bebas dari pengulangan, unsur humor yang sengaja dimasukkan, kata yang tidak sesuai dengan karakteristiknya dan lain sebagainya.</li>
      <li className='mb-5'>Sudah merupakan fakta bahwa seorang pembaca akan terpengaruh oleh isi tulisan dari sebuah halaman saat ia melihat tata letaknya. Maksud penggunaan Lorem Ipsum adalah karena ia kurang lebih memiliki penyebaran huruf yang normal, ketimbang menggunakan kalimat seperti "Bagian isi disini, bagian isi disini", sehingga ia seolah menjadi naskah Inggris yang bisa dibaca. Banyak paket Desktop Publishing dan editor situs web yang kini menggunakan Lorem Ipsum sebagai contoh teks. Karenanya pencarian terhadap kalimat "Lorem Ipsum" akan berujung pada banyak situs web yang masih dalam tahap pengembangan. Berbagai versi juga telah berubah dari tahun ke tahun, kadang karena tidak sengaja, kadang karena disengaja (misalnya karena dimasukkan unsur humor atau semacamnya)</li>
      </ul>
    </div>
  )
}

export default Dashboard