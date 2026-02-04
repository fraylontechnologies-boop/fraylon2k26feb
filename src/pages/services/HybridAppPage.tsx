import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const HybridAppPage = () => {
    return <ServiceLayout data={servicesData['hybrid-app']} />;
};

export default HybridAppPage;
