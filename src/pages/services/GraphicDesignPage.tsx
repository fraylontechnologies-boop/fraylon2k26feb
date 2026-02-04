import ServiceLayout from '../../components/ServiceLayout';
import { servicesData } from '../../data/servicesData';

const GraphicDesignPage = () => {
    return <ServiceLayout data={servicesData['graphic-design']} />;
};

export default GraphicDesignPage;
