import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const WixPage = () => {
    return <ServiceLayout data={servicesData['wix']} />;
};

export default WixPage;
