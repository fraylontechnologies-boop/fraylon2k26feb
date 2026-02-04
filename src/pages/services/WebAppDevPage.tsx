import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const WebAppDevPage = () => {
    return <ServiceLayout data={servicesData['web-app-dev']} />;
};

export default WebAppDevPage;
