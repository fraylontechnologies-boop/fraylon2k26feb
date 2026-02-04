import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const BrandingPage = () => {
    return <ServiceLayout data={servicesData['branding']} />;
};

export default BrandingPage;
