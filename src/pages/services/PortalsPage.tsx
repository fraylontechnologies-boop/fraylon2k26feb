import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const PortalsPage = () => {
    return <ServiceLayout data={servicesData['portals']} />;
};

export default PortalsPage;
