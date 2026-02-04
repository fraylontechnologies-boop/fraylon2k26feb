import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const MagentoPage = () => {
    return <ServiceLayout data={servicesData['magento']} />;
};

export default MagentoPage;
