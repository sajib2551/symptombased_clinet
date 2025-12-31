import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Detection from "../pages/Detection";
import KnowledgePage from "../pages/KnowledgePage";
import Blogs from "../pages/Blogs";
import MainLayout from "../layout/MainLayout";
import BMICalculator from "../pages/BMICalculator";
import Login from "../pages/Login";
import Register from "../pages/Register";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
                <Route index element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/detection" element={<Detection />} />
                <Route path="/bmi" element={<BMICalculator/>}/>
                <Route path="/knowledge" element={<KnowledgePage />} />
                <Route path="/blog" element={<Blogs />} />
                <Route path="/login" element={<Login/>} />
                <Route path="/reg" element={<Register/>} />
            </Route>
        </Routes>
    );
};

export default AppRoutes;
