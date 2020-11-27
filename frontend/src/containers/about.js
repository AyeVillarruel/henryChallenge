import React from 'react';
import style from '../components/styles/about.module.css'
import NavBar from '../components/navBar/NavBar'


const about = () => {

return (
    <div className= {style.background}>
        <NavBar/>
      <div  >
          <div className={style.textBoxAbout}>      
              <div className={style.titleAbout}><h2>About Us</h2></div> <br/>
              <div className={style.introAbout}> 
                Lorem ipsum amet sunt aute dolor nisi in id eiusmod sunt fugiat. Commodo nostrud commodo exercitation minim laboris consequat mollit nisi ea ullamco. 
                Culpa in do cupidatat amet consequat veniam nostrud incididunt dolor laborum deserunt fugiat eu. Occaecat dolore elit consequat nulla cillum occaecat velit et.
                Est occaecat reprehenderit ad reprehenderit officia adipisicing id commodo nisi sint irure. Anim dolore aliquip culpa veniam ea nisi reprehenderit consequat <br/>
                <br/>
                Thank you.
              </div>
           </div>
      </div>    
    </div>
    )

}

export default about; 