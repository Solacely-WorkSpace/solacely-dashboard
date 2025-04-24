import { MdAccountBalanceWallet, MdAreaChart, MdGroups, MdManageAccounts } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { FaCommentDots, FaHandshakeSimple } from "react-icons/fa6"


// assets 

import pink from "@/public/icons/green.svg";
import yellow from "@/public/icons/yellow.svg"
// DashBoard Menu Dataset


const AdminDashboardConstant = [
    {
        src: <MdAreaChart />,
        label: " DashBoard",
        url: "/"
    },

    {
        src: <GoHomeFill />,
        label: "Spaces",
        url: '/spaces'
    },

    {
        src: <MdGroups />,
        label: " Customers",
        url: "/customers"
    },

    {
        src: <FaHandshakeSimple />,
        label: "Partner",
        url: "/partner"
    },

    {
        src: <FaCommentDots />,
        label:" Comments ",
        url: "/comments"
    },

    {
        src: <MdAccountBalanceWallet />,
        label: " Account ",
        url: "/account"
    },

    {
        src: <MdManageAccounts />,
        label:" User Mgt ",
        url: "/management"
    }
]


const partnerInfo = [
    {

    avatar: yellow,

    bio: {
        name: " Samson John",
        email: " John@gmail.com",
    },

    timeStamp: {
        date: " Jan29, 2022",
        time: " 08.00 PM",
    },

    location: " Lagos",

    property: {
        name: " Home in Coral Gables",
        type: " Apartment Building"
    },

    payment: {
        amount: " 4,000,000",
        seasonal: " Annual"

    },

    status: "Paid",

    action: "View"
  },

  {

    avatar: pink,

    bio: {
        name: " Samson John",
        email: " John@gmail.com",
    },

    timeStamp: {
        date: " Jan29, 2022",
        time: " 08.00 PM",
    },

    location: " Lagos",

    property: {
        name: " Home in Coral Gables",
        type: " Apartment Building"
    },

    payment: {
        amount: " 4,000,000",
        seasonal: " Annual"

    },

    status: "Failed",

    action: "View"
 },


 {
    avatar: yellow,

    bio: {
        name: " Samson John",
        email: " John@gmail.com",
    },

    timeStamp: {
        date: " Jan29, 2022",
        time: " 08.00 PM",
    },

    location: " Lagos",

    property: {
        name: " Home in Coral Gables",
        type: " Apartment Building"
    },

    payment: {
        amount: " 4,000,000",
        seasonal: " Annual"

    },

    status: "Pending",

    action: "View"
 },


]


const Comments = [
    {
        avatar: yellow,
       name: "Benjamin Onyebucho" ,
       email: "benjamin@gmail.com",
       review: "  I had excellent services from green reality, thankyou for your help ",
       submit: {
        date: "2018/06/05",
        time: " 12:03 pm"
       },
       response: {
        name: " Home in Coral Gables",
        type: "Apartment Building"
       },
       status: "approved"
    },
    {
        avatar: pink,
       name: "Benjamin Onyebucho" ,
       email: "benjamin@gmail.com",
       review: "  I had excellent services from green reality, thankyou for your help ",
       submit: {
        date: "2018/06/05",
        time: " 12:03 pm"
       },
       response: {
        name: " Home in Coral Gables",
        type: "Apartment Building"
       },
       status: "approved"
    },
    {
       avatar: yellow,
       name: "Benjamin Onyebucho" ,
       email: "benjamin@gmail.com",
       review: "  I had excellent services from green reality, thankyou for your help ",
       submit: {
        date: "2018/06/05",
        time: " 12:03 pm"
       },
       response: {
        name: " Home in Coral Gables",
        type: "Apartment Building"
       },
       status: "approved"
    },
    {

       avatar: pink,
       name: "Benjamin Onyebucho" ,
       email: "benjamin@gmail.com",
       review: "  I had excellent services from green reality, thankyou for your help ",
       submit: {
        date: "2018/06/05",
        time: " 12:03 pm"
       },
       response: {
        name: " Home in Coral Gables",
        type: "Apartment Building"
       },
       status: "trash"
    },
    {
    avatar: yellow,
       name: "Benjamin Onyebucho" ,
       email: "benjamin@gmail.com",
       review: "  I had excellent services from green reality, thankyou for your help ",
       submit: {
        date: "2018/06/05",
        time: " 12:03 pm"
       },
       response: {
        name: " Home in Coral Gables",
        type: "Apartment Building"
       },
       status: "approved"
    },
    {
        avatar: pink,
       name: "Benjamin Onyebucho" ,
       email: "benjamin@gmail.com",
       review: "  I had excellent services from green reality, thankyou for your help ",
       submit: {
        date: "2018/06/05",
        time: " 12:03 pm"
       },
       response: {
        name: " Home in Coral Gables",
        type: "Apartment Building"
       },
       status: "peending"
    },
    {
        avatar: yellow,
       name: "Benjamin Onyebucho" ,
       email: "benjamin@gmail.com",
       review: "  I had excellent services from green reality, thankyou for your help ",
       submit: {
        date: "2018/06/05",
        time: " 12:03 pm"
       },
       response: {
        name: " Home in Coral Gables",
        type: "Apartment Building"
       },
       status: "approved"
    },
    {
        avatar: yellow,
       name: "Benjamin Onyebucho" ,
       email: "benjamin@gmail.com",
       review: "  I had excellent services from green reality, thankyou for your help ",
       submit: {
        date: "2018/06/05",
        time: " 12:03 pm"
       },
       response: {
        name: " Home in Coral Gables",
        type: "Apartment Building"
       },
       status: "pending"
    },
    {
        avatar: pink,
       name: "Benjamin Onyebucho" ,
       email: "benjamin@gmail.com",
       review: "  I had excellent services from green reality, thankyou for your help ",
       submit: {
        date: "2018/06/05",
        time: " 12:03 pm"
       },
       response: {
        name: " Home in Coral Gables",
        type: "Apartment Building"
       },
       status: "approved"
    },
    {
        avatar: pink,
       name: "Benjamin Onyebucho" ,
       email: "benjamin@gmail.com",
       review: "  I had excellent services from green reality, thankyou for your help ",
       submit: {
        date: "2018/06/05",
        time: " 12:03 pm"
       },
       response: {
        name: " Home in Coral Gables",
        type: "Apartment Building"
       },
       status: "pending"
    },
    {
        avatar: pink,
       name: "Benjamin Onyebucho" ,
       email: "benjamin@gmail.com",
       review: "  I had excellent services from green reality, thankyou for your help ",
       submit: {
        date: "2018/06/05",
        time: " 12:03 pm"
       },
       response: {
        name: " Home in Coral Gables",
        type: "Apartment Building"
       },
       status: "approved"
    },
]


export {
    AdminDashboardConstant,
    partnerInfo,
    Comments
}
