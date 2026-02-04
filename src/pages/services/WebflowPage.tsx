import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const WebflowPage = () => {
    return <ServiceLayout data={servicesData['webflow']} />;
};

export default WebflowPage;
