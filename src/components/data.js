import { IoWalletOutline } from "react-icons/io5";
import { FaCoins } from "react-icons/fa";
import { LuCandlestickChart } from "react-icons/lu";
import { TbAffiliate } from "react-icons/tb";
import {socialAndroidOutline} from 'react-icons-kit/ionicons/socialAndroidOutline';
import {socialAndroid} from 'react-icons-kit/ionicons/socialAndroid'
import { Icon } from 'react-icons-kit'
import {target} from 'react-icons-kit/ikons/target'
import { LuBadgePercent } from "react-icons/lu";
import { BsTools } from "react-icons/bs";
import { TfiHeadphoneAlt } from "react-icons/tfi";

 const menu = [
    {
        title:"Walet",
        path:"/walet",
        icon:<IoWalletOutline size={22}/>
        
    },
    {
        title:"Funds",
        path:"/Funds",
        icon:<FaCoins size={22}/>,
        subNav:[
       {
        
          title:"Funds",
          path:"/walet",
          icon:<FaCoins size={22}/>
     },
      {
        
        title:"Funds",
        path:"/walet",
        icon:<IoWalletOutline/>
       },
    
   
        
        ]
        
    },
    {
        title:"My Account",
        path:"/MyAccount",
        icon:<LuCandlestickChart size={22}/>,
        subNav:[
            {
               
        title:"My Account",
        path:"/MyAccount",
        icon:<IoWalletOutline size={22}/>, 
            },
            {
               
                title:"My Account",
                path:"/MyAccount",
                icon:<IoWalletOutline size={22}/>, 
                    }
        ]
    },
   ,
    {
        title:"Ib Panel",
        path:"/IbPanel",
        icon:<TbAffiliate size={22}/>,
        subNav:[
            {
                
        title:"Ib Panel",
        path:"/IbPanel",
        icon:<IoWalletOutline size={22}/>
            },
            {
                
                title:"Ib Panel",
                path:"/IbPanel",
                icon:<IoWalletOutline size={22}/>
                    }

        ]
        
    },
    {
        title:"PAMM",
        path:"/PAMM",
        icon:<Icon icon={target} size={22}/>
        
    },
    {
        title:"Bot Panel",
        path:"/walet",
        icon:<Icon icon={socialAndroidOutline} size={22}/>
        
    },
      {
        title:"Promotion",
        path:"/Promotion",
        icon:<LuBadgePercent size={22}/>
        
    }, 
     {
        title:"Trading tools",
        path:"/TradingTools",
        icon:<BsTools size={22}/>
        
    },
    {
        title:"Support",
        path:"/Support",
        icon:<TfiHeadphoneAlt size={22} />
        
    },
]

export default menu;