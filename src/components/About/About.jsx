import React from "react";
import cls from "./about.module.scss";
import AboutImage from "../../Images/about.png"

const About = () => {
  return (
    <div className={cls.wrapper}>
      <div className={cls.img}>
        <img src={AboutImage} alt="" />
      </div>
      <div className={cls.about_text}>
        <h1 className={cls.header}>О нас</h1>
        <p>
          «Zuzu Пицца» — это сервис доставки пиццы в Ташкенте. Мы доставляем
          пиццу и другую еду по Ташкенту в пределах Большой кольцевой дороги, а
          так же в районы: Сергели, ТТЗ, Югнакий, Хумаюн.
        </p>
        <p>
          Приготовление пиццы занимает в среднем 7-12 минут. При больших заказах
          общее время выпечки пиццы значительно сокращается, так что заказывайте
          много пицц и выпечка займет меньше времени. Время на доставку готовой
          пиццы до двери вашего дома или офиса составляет в среднем 15-30 минут.
          Таким образом, общее время доставки в среднем составляет 30-50 минут.
          Мы доставляем пиццу в специальных термо-сумках и во время доставки
          пицца остается горячей.
        </p>
        <p>
          Наш график работы с 10:00 до 23:00 каждый день, без выходных. Если вы
          хотите заказать доставку пиццы на раннее время, то необходимо уточнить
          у оператора такую возможность.
        </p>
      </div>
    </div>
  );
};

export default About;
