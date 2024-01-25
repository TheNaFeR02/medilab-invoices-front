import NewInvoices from "@/app/tariffs/new/page";
import Dashboard from "../../app/dashboard/page"
import Contact from "../../app/screens/contactus"
import Subscription from "../../app/screens/subscription"
import DashboardIcon from '@mui/icons-material/Dashboard';
import PhonePausedIcon from '@mui/icons-material/PhonePaused';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import Tariffs from "@/app/tariffs/page";
export default function(){
    const data=[
        {
            id:0,
            label:"General\nInformation",
            img:<DashboardIcon/>,
            component:<Dashboard/>,
            path:"/dashboard"

        },
        {
            id:1,
            label:"Users",
            img:<PhonePausedIcon/>,
            component:<Contact/>,
            path:"/contact"

        },
        {
            id:2,
            label:"Control",
            img:<SubscriptionsIcon/>,
            component:<Subscription/>,
            path:"/subscription"
        },
        {
            id:3,
            label:"Mission\nCompanies",
            img:<SubscriptionsIcon/>,
            component:<Subscription/>,
            path:"/subscription"
        },
        {
            id:4,
            label:"Invoices",
            img:<SubscriptionsIcon/>,
            component:<Tariffs/>,
            path:"/tariffs"
        },
    ]
    return data
}

// export default data