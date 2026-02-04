import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const UiUxPage = () => {
    return <ServiceLayout data={servicesData['ui-ux']} />;
};

export default UiUxPage;
