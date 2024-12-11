using ControleFuncionarios.Models;

namespace ControleFuncionarios.Service.FuncionarioService
{
    public interface IFuncionarioService
    {
        Task<ServiceResponse<List<FuncionarioModel>>> GetAllFuncionario();
        Task<ServiceResponse<FuncionarioModel>> GetFuncionarioById(int id);
        Task<ServiceResponse<List<FuncionarioModel>>> CreateFuncionario(FuncionarioModel novoFuncionario);
        Task<ServiceResponse<FuncionarioModel>> UpdateFuncionario(FuncionarioModel editadoFuncionario);
        Task<ServiceResponse<List<FuncionarioModel>>> DeleteFuncionario(int id);
        Task<ServiceResponse<FuncionarioModel>> InactivateFuncionario(int id);
    }
}