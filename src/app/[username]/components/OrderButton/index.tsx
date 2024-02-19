'use client';

import { ArrowDownIcon, ArrowUpIcon } from "@primer/octicons-react";
import { toggle } from '@/redux/features/order-slice';
import type { AppDispatch } from "@/redux/store";
import { useAppSelector } from "@/redux/store";
import { useDispatch } from 'react-redux';

export const OrderButton = () => {

  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => dispatch(toggle());

  const order = useAppSelector((state) => state.orderReducer.value);

  return (
    <div className="cursor-pointer select-none" onClick={handleClick}>
      Order {order === 'desc' ? <ArrowDownIcon /> : <ArrowUpIcon />}
    </div>
  );
};