import React from 'react';
import './header.css'


const header = () => {
    return (
        <div>
            <div className="a"> 
                <div className='text'>

                    <img className='yt' src="./images/sotial.png" alt="" />
             
                        <div className="email">
                            <img className='img_e' src="./images/Group.e.png" alt="" /> 
                                <div className="email2">
                                   <h4 className='e1'>project@bimpro.ru</h4>
                                    <h4 className='e2'>Электронная почта</h4> 
                                </div> 
                        </div>
                    
                    

                        <div className="location">
                            <img className='img_le' src="./images/group.le.png" alt="" />
                            <div className="location2">
                                <h4 className='l1'>Санкт-Петербург</h4>
                                <h4 className='l2'>Шпалерная, 51</h4>
                            </div>
                        
                        </div>

                    <div className="number">
                            <img className='img_nom' src="./images/Group.nom.png" alt="" />
                        <div className="number2">
                            <h4 className="n1">+7 812 330 10 40</h4>
                            <h5 className="n2">Обратный звонок</h5>
                        </div>
                    </div>
                </div>
            </div>



        <div className="bimpro">
            <nav>
                <div className="bimpro_img">
                    <img src="./images/logo.png" alt="" />
                </div>
                <div class="bimpro_text">
                    <ul>
                        <li>
                            <a href="">О нас</a>
                        </li>
                        <li>
                            <a href="">Услуги</a>
                        </li>
                        <li>
                            <a href="">Наши проекты</a>
                        </li>
                        <li>
                            <a href="">Контакты</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="img_background">
                 
                <img className='Rect' src="./images/Rect.png" alt="" />
               <h1 className='h1'>Визуализация</h1>
                <div className="a2">
                    <h3>
                        Архитектурная 3d визуализация помогает любому проекту максимально эффектно и 
                        эффективно донести идею до потребителя. Наша команда предлагает широкий спектр 
                        современных решений в сфере презентационных материалов, с высокой степенью проработки 
                        и вниманию к деталям. Качественно выполненная визуализация повысит привлекательность 
                        проекта и выведет его на новый уровень
                    </h3>
               </div>
            </div>
        </div> 

        <div className="interior">
            <div className="interior_text">
                <h1>Визуализация интерьера</h1>
                <h3>Прорисовка интерьера любой сложности и в различных стилестических решениях по техническому 
                    заданию заказчика. 
                    Использование готовых позиций мебели и моделирование индивидуальной корпусной мебели.</h3>
                <h2>от 000 руб/м2</h2>
                <h3 className='t1'>Стоимость может изменяться в зависимости от площади и стилевых особенностей интерьера. </h3>
                <h2>Срок выполнения эскизного предложения: 3-5 рабочих дней</h2>
                <h3 className='t2'>Эскизное предложение для одного помещения.</h3>
                <div className="interior_button">
                  <button>Визуализация интерьера</button>  
                </div>
                
            </div>
        </div>
    </div>
    );
};

export default header;