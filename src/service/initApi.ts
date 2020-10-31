import axios from 'axios';
import { serviceOptions } from './service';

const instance = axios.create({
  timeout: 700,
});

serviceOptions.axios = instance;
