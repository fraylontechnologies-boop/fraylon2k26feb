import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const NativeAppPage = () => {
    return <ServiceLayout data={servicesData['native-app']} />;
};

export default NativeAppPage;
