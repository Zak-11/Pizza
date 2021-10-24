import React from 'react';
import {Categories, SortPopup} from "../components";

function Home () {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    items={['Meat', 'Vegetarian', 'Grilled', 'Sharp', 'Closed']}/>
                <SortPopup items={['popularity', 'price', 'alphabet']}/>
            </div>
            <h2 className="content__title">All pizzas</h2>
            <div className="content__items">
                <div className="pizza-block">
                    <img
                        className="pizza-block__image"
                        src="https://oop2.pizzahut.ru/product_pics/small//1/pizza_mushroom_new.jpg"
                        alt="Pizza"
                    />
                    <h4 className="pizza-block__title">Cheeseburger pizza</h4>
                    <div className="pizza-block__selector">
                        <ul>
                            <li className="active">thin</li>
                            <li>traditional</li>
                        </ul>
                        <ul>
                            <li className="active">26 cm .</li>
                            <li>30 сm.</li>
                            <li>40 сm.</li>
                        </ul>
                    </div>
                    <div className="pizza-block__bottom">
                        <div className="pizza-block__price">from 7 $</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Add</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>
                <div className="pizza-block">
                    <img
                        className="pizza-block__image"
                        src="https://oop2.pizzahut.ru/product_pics/small//1/pizza_margherita_new.jpg"
                        alt="Pizza"
                    />
                    <h4 className="pizza-block__title">Cheeseburger pizza</h4>
                    <div className="pizza-block__selector">
                        <ul>
                            <li className="active">thin</li>
                            <li>traditional</li>
                        </ul>
                        <ul>
                            <li className="active">26 cm .</li>
                            <li>30 сm.</li>
                            <li>40 сm.</li>
                        </ul>
                    </div>
                    <div className="pizza-block__bottom">
                        <div className="pizza-block__price">from 7 $</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Add</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>
                <div className="pizza-block">
                    <img
                        className="pizza-block__image"
                        src="https://oop2.pizzahut.ru/product_pics/small//3/418ad50e3979e8d9ad3403e6a464914c.png"
                        alt="Pizza"
                    />
                    <h4 className="pizza-block__title">Cheeseburger pizza</h4>
                    <div className="pizza-block__selector">
                        <ul>
                            <li className="active">thin</li>
                            <li>traditional</li>
                        </ul>
                        <ul>
                            <li className="active">26 cm .</li>
                            <li>30 сm.</li>
                            <li>40 сm.</li>
                        </ul>
                    </div>
                    <div className="pizza-block__bottom">
                        <div className="pizza-block__price">from 7 $</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Add</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>
                <div className="pizza-block">
                    <img
                        className="pizza-block__image"
                        src="https://oop2.pizzahut.ru/product_pics/small//2/70856dcea15dd0aab50c1243ecf9938a.png"
                        alt="Pizza"
                    />
                    <h4 className="pizza-block__title">Cheeseburger pizza</h4>
                    <div className="pizza-block__selector">
                        <ul>
                            <li className="active">thin</li>
                            <li>traditional</li>
                        </ul>
                        <ul>
                            <li className="active">26 cm .</li>
                            <li>30 сm.</li>
                            <li>40 сm.</li>
                        </ul>
                    </div>
                    <div className="pizza-block__bottom">
                        <div className="pizza-block__price">from 7 $</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Add</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>
                <div className="pizza-block">
                    <img
                        className="pizza-block__image"
                        src="https://oop2.pizzahut.ru/product_pics/small//1/pizza_chicken_bbq_new.jpg"
                        alt="Pizza"
                    />
                    <h4 className="pizza-block__title">Cheeseburger pizza</h4>
                    <div className="pizza-block__selector">
                        <ul>
                            <li className="active">thin</li>
                            <li>traditional</li>
                        </ul>
                        <ul>
                            <li className="active">26 cm .</li>
                            <li>30 сm.</li>
                            <li>40 сm.</li>
                        </ul>
                    </div>
                    <div className="pizza-block__bottom">
                        <div className="pizza-block__price">from 7 $</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Add</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>
                <div className="pizza-block">
                    <img
                        className="pizza-block__image"
                        src="https://oop2.pizzahut.ru/product_pics/small//1/a7d86028e431096a8adb2b364455dcce.png"
                        alt="Pizza"
                    />
                    <h4 className="pizza-block__title">Cheeseburger pizza</h4>
                    <div className="pizza-block__selector">
                        <ul>
                            <li className="active">thin</li>
                            <li>traditional</li>
                        </ul>
                        <ul>
                            <li className="active">26 cm .</li>
                            <li>30 сm.</li>
                            <li>40 сm.</li>
                        </ul>
                    </div>
                    <div className="pizza-block__bottom">
                        <div className="pizza-block__price">from 7 $</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Add</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>
                <div className="pizza-block">
                    <img
                        className="pizza-block__image"
                        src="https://oop2.pizzahut.ru/product_pics/small//3/ca626217c8499dc33d523a04fb83625f.png"
                        alt="Pizza"
                    />
                    <h4 className="pizza-block__title">Cheeseburger pizza</h4>
                    <div className="pizza-block__selector">
                        <ul>
                            <li className="active">thin</li>
                            <li>traditional</li>
                        </ul>
                        <ul>
                            <li className="active">26 cm .</li>
                            <li>30 сm.</li>
                            <li>40 сm.</li>
                        </ul>
                    </div>
                    <div className="pizza-block__bottom">
                        <div className="pizza-block__price">from 7 $</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Add</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>
                <div className="pizza-block">
                    <img
                        className="pizza-block__image"
                        src="https://oop2.pizzahut.ru/product_pics/small//3/fbd0b10ce3bcce36aa44104432dedb09.png"
                        alt="Pizza"
                    />
                    <h4 className="pizza-block__title">Cheeseburger pizza</h4>
                    <div className="pizza-block__selector">
                        <ul>
                            <li className="active">thin</li>
                            <li>traditional</li>
                        </ul>
                        <ul>
                            <li className="active">26 cm .</li>
                            <li>30 сm.</li>
                            <li>40 сm.</li>
                        </ul>
                    </div>
                    <div className="pizza-block__bottom">
                        <div className="pizza-block__price">from 7 $</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Add</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>
                <div className="pizza-block">
                    <img
                        className="pizza-block__image"
                        src="https://oop2.pizzahut.ru/product_pics/small//1/pizza_cheeseburger_new.jpg"
                        alt="Pizza"
                    />
                    <h4 className="pizza-block__title">Cheeseburger pizza</h4>
                    <div className="pizza-block__selector">
                        <ul>
                            <li className="active">thin</li>
                            <li>traditional</li>
                        </ul>
                        <ul>
                            <li className="active">26 cm .</li>
                            <li>30 сm.</li>
                            <li>40 сm.</li>
                        </ul>
                    </div>
                    <div className="pizza-block__bottom">
                        <div className="pizza-block__price">from 7 $</div>
                        <div className="button button--outline button--add">
                            <svg
                                width="12"
                                height="12"
                                viewBox="0 0 12 12"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                                    fill="white"
                                />
                            </svg>
                            <span>Add</span>
                            <i>2</i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;