package com.banco;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class TransacaoServiceMockTest {

    @InjectMocks
    private TransacaoService transacaoService;

    @Mock
    private Conta contaOrigemMock;

    @Mock
    private Conta contaDestinoMock;

    @Test
    void deveTransferirValorChamandoMetodosDeConta() {
        // Cenário
        double valorTransferencia = 100.0;

        // Ação
        transacaoService.transferir(contaOrigemMock, contaDestinoMock, valorTransferencia);

        // Verificação (Assert)
        // Verifica se o método 'sacar' foi chamado na origem com o valor correto (1 vez)
        verify(contaOrigemMock, times(1)).sacar(valorTransferencia);
        
        // Verifica se o método 'depositar' foi chamado no destino com o valor correto (1 vez)
        verify(contaDestinoMock, times(1)).depositar(valorTransferencia);
    }
}