import axios from 'axios';
import { serviceOptions } from './service';

const instance = axios.create({
  timeout: 5000,
});

serviceOptions.axios = instance;
