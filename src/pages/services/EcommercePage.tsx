import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const EcommercePage = () => {
    return <ServiceLayout data={servicesData['ecommerce']} />;
};

export default EcommercePage;
