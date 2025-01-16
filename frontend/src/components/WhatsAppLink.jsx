import React from 'react'

const WhatsAppLink = () => {
    const phoneNumber = '93748683826';
    const message = 'Hello I am interested in your products!';
    const whatsappUrl = `https://wa.me/93748683826?text=${encodeURIComponent(message)}`;
  return (
    <a
    href={whatsappUrl}
    target='_blank'
    rel='noopener noreferrer'
    style={{
      textDecoration: 'none',
      color: 'inherit',
    }}
    >
    <div style={{ display: 'flex', alignItems: 'center'}}>
       <img 
        src='http://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg'
        alt='WhatsApp'
        style={{ width: '40px', height: '40px', marginRight: '10px' }}
       />
    </div>
    </a>
  );
};

export default WhatsAppLink