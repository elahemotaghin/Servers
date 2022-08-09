import React from "react";
import {Route, Routes} from "react-router-dom";

import defaultTheme from "../../assets/themes/defultTheme";
import Header from "./Header";
import SideBar from "./Sidebar";
import Home from "../dashboard/Home"
import ServerView from "../serverView/ServerView";
import ServersRoot from '../servers/index';
import '../../assets/themes/customStyle.css'

import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider} from '@mui/material/styles';

const serverList = [
    {
      name: 'سرور اختصاصی ایران',
      detail: 'استفاده از سرورهای اختصاصی داخل کشور باعث می‌شود که سرعت دسترسی کاربران ایرانی به اطلاعات سرور شما تا ۴ برابر افزایش پیدا کند. ایران‌سرور با ایجاد یک شبکه‌ی خصوصی و استفاده از بهترین تجهیزات سخت‌افزاری در سه دیتاسنتر افرانت، پارس‌آنلاین و مخابرات، خدمات متنوعی را به شما ارائه می‌دهد. استفاده از سرورهای جدید با برندهای معتبر جهانی تضمین کننده‌ی کیفیت خدمات ما خواهد بود. افتخار ما ارائه خدمات قابل رقابت با دیتاسنترهای خارجی در داخل ایران می‌باشد.',
      id: 1,
      dataCenter: 'تهران',
      enable: true,
      status: 'running',
      tags: ['اختصاصی']
    },
    {
        name: 'سرور مجازی اروپا',
        detail: 'اطمینان داریم استفاده از تکنولوژی‌های مختلف مجازی‌سازی در بستر دو دیتاسنتر OVH و Hetzner در کنار حق انتخاب نوع سخت‌افزار (SATA-SAS-SSD NVME) و اتصال به اینترنت گیگابیتی، تمام دلایل انتخاب نکردن این سرویس را به روی شما خواهد بست.',
        id: 3,
        dataCenter: 'لندن',
        enable: true,
        status: 'starting',
        tags: ['اختصاصی',  'ابری']
      },
      {
        name: 'سرور GPU',
        detail: 'سرورهای GPU ایران‌سرور، برای کسب و کارهای مبتنی بر هوش مصنوعی، یادگیری ماشین (Machine Learning) و تحلیل داده‌های بزرگ مناسب هستند.',
        id: 8,
        dataCenter: 'تهران',
        enable: false,
        status: 'disable',
        tags: ['اختصاصی']
      },
      {
        name: 'سرور اشتراکی ایران',
        detail: 'سرورهای GPU ایران‌سرور، برای کسب و کارهای مبتنی بر هوش مصنوعی، یادگیری ماشین (Machine Learning) و تحلیل داده‌های بزرگ مناسب هستند.',
        id: 4,
        dataCenter: 'تهران',
        enable: false,
        status: 'stop',
        tags: ['اشتراکی']
      },
      {
        name: 'سرور مجازی اروپا',
        detail: 'اطمینان داریم استفاده از تکنولوژی‌های مختلف مجازی‌سازی در بستر دو دیتاسنتر OVH و Hetzner در کنار حق انتخاب نوع سخت‌افزار (SATA-SAS-SSD NVME) و اتصال به اینترنت گیگابیتی، تمام دلایل انتخاب نکردن این سرویس را به روی شما خواهد بست.',
        id: 5,
        dataCenter: 'لندن',
        enable: true,
        status: 'starting',
        tags: ['اختصاصی',  'ابری']
      },
      {
        name: 'سرور GPU',
        detail: 'سرورهای GPU ایران‌سرور، برای کسب و کارهای مبتنی بر هوش مصنوعی، یادگیری ماشین (Machine Learning) و تحلیل داده‌های بزرگ مناسب هستند.',
        id: 2,
        dataCenter: 'تهران',
        enable: false,
        status: 'active',
        tags: ['اشتراکی']
      },
      {
        name: 'سرور GPU',
        detail: 'سرورهای GPU ایران‌سرور، برای کسب و کارهای مبتنی بر هوش مصنوعی، یادگیری ماشین (Machine Learning) و تحلیل داده‌های بزرگ مناسب هستند.',
        id: 6,
        dataCenter: 'تهران',
        enable: false,
        status: 'active',
        tags: ['اشتراکی']
      },
      {
        name: 'سرور مجازی اروپا',
        detail: 'اطمینان داریم استفاده از تکنولوژی‌های مختلف مجازی‌سازی در بستر دو دیتاسنتر OVH و Hetzner در کنار حق انتخاب نوع سخت‌افزار (SATA-SAS-SSD NVME) و اتصال به اینترنت گیگابیتی، تمام دلایل انتخاب نکردن این سرویس را به روی شما خواهد بست.',
        id: 7,
        dataCenter: 'لندن',
        enable: true,
        status: 'running',
        tags: ['اختصاصی',  'ابری']
      },
      {
        name: 'سرور مجازی اروپا',
        detail: 'اطمینان داریم استفاده از تکنولوژی‌های مختلف مجازی‌سازی در بستر دو دیتاسنتر OVH و Hetzner در کنار حق انتخاب نوع سخت‌افزار (SATA-SAS-SSD NVME) و اتصال به اینترنت گیگابیتی، تمام دلایل انتخاب نکردن این سرویس را به روی شما خواهد بست.',
        id: 9,
        dataCenter: 'لندن',
        enable: true,
        status: 'running',
        tags: ['اختصاصی']
      },
      {
        name: 'سرور GPU',
        detail: 'سرورهای GPU ایران‌سرور، برای کسب و کارهای مبتنی بر هوش مصنوعی، یادگیری ماشین (Machine Learning) و تحلیل داده‌های بزرگ مناسب هستند.',
        id: 10,
        dataCenter: 'تهران',
        enable: false,
        status: 'stop',
        tags: ['اشتراکی']
      },
  ]

const Root = (props) =>{
    const drawerWidth = React.useState(200);

    return(
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <SideBar drawerWidth={210}/>
                <Header drawerWidth={210}/>
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default' }}
                >
                    <Toolbar />
                    <Routes>
                        <Route path="/" exact element={<Home />}>
                        </Route>
                        <Route path="/servers" exact element={<ServersRoot servers={serverList}/>}>
                        
                        </Route>
                        <Route path="/servers/:serverId" element={<ServerView servers={serverList}/>}>
                        </Route>
                    
                    </Routes>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Root;