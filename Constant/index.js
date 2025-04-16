import { MdAccountBalanceWallet, MdAreaChart, MdGroups, MdManageAccounts } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import { FaCommentDots, FaHandshakeSimple } from "react-icons/fa6"
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


export {
    AdminDashboardConstant
}
