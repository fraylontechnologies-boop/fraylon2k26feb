import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const CustomCmsPage = () => {
    return <ServiceLayout data={servicesData['custom-cms']} />;
};

export default CustomCmsPage;
