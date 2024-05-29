import express from 'express';
import {
  createCliente,
  getAllClientes,
  updateCliente,
  deleteCliente,
} from '../controllers/clienteController.js';
import {
  validarCreateCliente,
  validarDeleteCliente,
  validarUpdateCliente,
} from '../middlewares/clienteMiddleware.js';

// eslint-disable-next-line new-cap
const router = express.Router();

router.post('/', validarCreateCliente, createCliente);
router.get('/', getAllClientes);
router.put('/:id', validarUpdateCliente, updateCliente);
router.delete('/:id', validarDeleteCliente, deleteCliente);

export default router;
