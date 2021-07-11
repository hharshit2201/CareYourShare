import React from 'react';
import * as VsIcons from "react-icons/vsc";
import * as AiIcons from "react-icons/ai";
import * as RiIcons from "react-icons/ri";
import * as MdIcons from "react-icons/md";
import * as GiIcons from "react-icons/gi";

export const MenuItems = [
    {
        title:'Dashboard',
        path:'/',
        icon:<VsIcons.VscDashboard/>,
        cName:'nav-text'
    },
    {
        title:'Stocks',
        path:'/stocks',
        icon:<AiIcons.AiOutlineStock/>,
        cName:'nav-text'
    },
    {
        title:'Mutual Funds',
        path:'/mutualfunds',
        icon:<AiIcons.AiOutlineFund/>,
        cName:'nav-text'
    },
    {
        title:'Savings Accounts',
        path:'/savingsaccounts',
        icon:<RiIcons.RiBankLine/>,
        cName:'nav-text'
    },
    {
        title:'US Stocks',
        path:'/usstocks',
        icon:<MdIcons.MdAttachMoney/>,
        cName:'nav-text'
    },
    {
        
        title:'Earnings',
        path:'/earnings',
        icon:<GiIcons.GiMoneyStack/>,
        cName:'nav-text'
    },
    {
        
        title:'Dividends',
        path:'/dividends',
        icon:<VsIcons.VscSmiley/>,
        cName:'nav-text'
    }
]