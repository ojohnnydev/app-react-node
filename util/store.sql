-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 31-Maio-2021 às 18:21
-- Versão do servidor: 10.4.14-MariaDB
-- versão do PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `store`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `celulares`
--

CREATE TABLE `celulares` (
  `id` int(11) NOT NULL,
  `tipo_produto_id_INT` int(11) NOT NULL,
  `marca` varchar(150) NOT NULL,
  `modelo` varchar(150) NOT NULL,
  `cor` varchar(150) NOT NULL,
  `preco` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `celulares`
--

INSERT INTO `celulares` (`id`, `tipo_produto_id_INT`, `marca`, `modelo`, `cor`, `preco`) VALUES
(1, 2, 'Apple', 'Iphone 11', 'Preto', 5500),
(2, 2, 'Samsung', 'Galaxy A02', 'Dourado', 559),
(3, 2, 'Xiaomi', 'Redmi Note 10', 'Prata', 2190),
(4, 2, 'Motorola', 'Moto G9 Plus', 'Azul Indigo', 1620),
(5, 2, 'Apple', 'Iphone 12', 'Branco', 5951);

-- --------------------------------------------------------

--
-- Estrutura da tabela `computadores`
--

CREATE TABLE `computadores` (
  `id` int(11) NOT NULL,
  `tipo_produto_id_INT` int(11) NOT NULL,
  `tamanho_tela` varchar(150) NOT NULL,
  `processador` varchar(150) NOT NULL,
  `memoria` varchar(150) NOT NULL,
  `armazenamento` varchar(150) NOT NULL,
  `sistema_operacional` varchar(150) NOT NULL,
  `preco` float NOT NULL,
  `cor` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `computadores`
--

INSERT INTO `computadores` (`id`, `tipo_produto_id_INT`, `tamanho_tela`, `processador`, `memoria`, `armazenamento`, `sistema_operacional`, `preco`, `cor`) VALUES
(1, 1, '13 polegadas', 'Intel Core i3', '4GB', 'HD 1TB', 'Windows 10', 3000, 'Prata'),
(2, 1, '14 polegadas', 'Intel Core i3', '8GB', 'SSD 256GB', 'Windows 10', 4800, 'Preto'),
(3, 1, '13 polegadas', 'Intel Core i5', '16GB', 'SSD 256GB', 'Linux', 6000, 'Dourado'),
(4, 1, '14 polegadas', 'Intel Core i3', '16GB', 'SSD 128GB', 'Linux', 5200, 'Dourado'),
(5, 1, '15 polegadas', 'Intel Core i7', '8GB', 'HD 1TB', 'Windows 10', 6500, 'Prata'),
(6, 1, '17 polegadas', 'Intel Core i7', '16GB', 'SSD 265GB / HD 1TB', 'Windows 10', 8500, 'Preto'),
(7, 1, '17 polegadas', 'Intel Core i5', '8GB', 'SSD 128GB / HD 1TB', 'Linux', 7000, 'Prata'),
(8, 1, '15 polegadas', 'Intel Core i9', '16GB', 'SSD 1TB', 'Windows 10', 9000, 'Preto'),
(9, 1, '14 polegadas', 'Intel Core i7', '8GB', 'SSD 512GB', 'Linux', 7350, 'Dourado'),
(10, 1, '15 polegadas', 'Intel Core i5', '4GB', 'SSD 256GB', 'Windows 10', 6350, 'Preto');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tipo_produto`
--

CREATE TABLE `tipo_produto` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tipo_produto`
--

INSERT INTO `tipo_produto` (`id`, `nome`) VALUES
(1, 'computadores'),
(2, 'celulares');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nome` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `senha` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuarios`
--

INSERT INTO `usuarios` (`id`, `nome`, `email`, `senha`) VALUES
(1, 'tiago', 'dev@somedomain.com', 'MTIzNDU2');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `celulares`
--
ALTER TABLE `celulares`
  ADD PRIMARY KEY (`id`),
  ADD KEY `celular_fk` (`tipo_produto_id_INT`);

--
-- Índices para tabela `computadores`
--
ALTER TABLE `computadores`
  ADD PRIMARY KEY (`id`),
  ADD KEY `computador_fk` (`tipo_produto_id_INT`);

--
-- Índices para tabela `tipo_produto`
--
ALTER TABLE `tipo_produto`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `celulares`
--
ALTER TABLE `celulares`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de tabela `computadores`
--
ALTER TABLE `computadores`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de tabela `tipo_produto`
--
ALTER TABLE `tipo_produto`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de tabela `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `celulares`
--
ALTER TABLE `celulares`
  ADD CONSTRAINT `celular_fk` FOREIGN KEY (`tipo_produto_id_INT`) REFERENCES `tipo_produto` (`id`);

--
-- Limitadores para a tabela `computadores`
--
ALTER TABLE `computadores`
  ADD CONSTRAINT `computador_fk` FOREIGN KEY (`tipo_produto_id_INT`) REFERENCES `tipo_produto` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
