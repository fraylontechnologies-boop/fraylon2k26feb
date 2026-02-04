import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const ShopifyPage = () => {
    return <ServiceLayout data={servicesData['shopify']} />;
};

export default ShopifyPage;
