import React, { useState } from "react";
import cls from "./order.module.scss";
import { AddAction } from "../../Redux/cartReducer";
import { useDispatch } from "react-redux";
import { MinusIcon, PlusIcon } from "../icons";

const Order = ({ openProduct, handleCloseProduct, counter, setCounter }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className={cls.modal_wrapper}>
        <div className={cls.modal_img}>
          <img src={openProduct.img} alt="img" />
        </div>
        <div className={cls.modal_infos}>
          <div className={cls.info}>
            <h1 className={cls.header}>{openProduct.name}</h1>
            <p className={cls.text}>{openProduct.comment}</p>
          </div>
          <div className={cls.buttons}>
            <div className={cls.count}>
              <span
                onClick={() => setCounter((old) => (old === 1 ? 1 : --old))}
              >
                <MinusIcon />
              </span>
              <p>{counter}</p>
              <span onClick={() => setCounter((old) => old + 1)}>
                <PlusIcon />
              </span>
            </div>

            <div
              className={cls.buyButton}
              onClick={() => {
                dispatch(
                  AddAction({
                    counter,
                    img: openProduct.img,
                    name: openProduct.name,
                    price: openProduct.price,
                    id: "a" + Date.now(),
                  })
                );
                handleCloseProduct(false);
                setCounter(1);
              }}
            >
              <p>Добавить</p>
              <p>{openProduct.price}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
