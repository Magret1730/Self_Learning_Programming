import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import '@/assets/styles/globals.css';
import AuthProvider from '@/components/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export const metadata = {
    title: "Property Pulse",
    keywords: 'rental, property, real estate',
    description: "Find the perfect rental property"
};

const MainLayout = ({ children }) => {
    return (
        <AuthProvider>
            <html>
                <body>
                    <Navbar />
                    <main>{ children }</main>
                    <Footer />
                    <ToastContainer />
                </body>
            </html>
        </AuthProvider>
    );
}

export default MainLayout;