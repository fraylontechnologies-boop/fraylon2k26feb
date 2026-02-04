import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const MaintenancePage = () => {
    return <ServiceLayout data={servicesData['maintenance']} />;
};

export default MaintenancePage;
