import { useParams } from 'react-router-dom';
import ServiceLayout from '../components/ServiceLayout';
import { servicesData } from '../data/servicesData';
import './ServiceDetail.css';

const ServiceDetail = () => {
    const { id } = useParams<{ id: string }>();
    const data = (id && servicesData[id]) ? servicesData[id] : servicesData['default'];
    return <ServiceLayout data={data} />;
};

export default ServiceDetail;
