import axios from 'axios';
import { serviceOptions } from './service';

const instance = axios.create({
  timeout: 15020,
});

serviceOptions.axios = instance;
