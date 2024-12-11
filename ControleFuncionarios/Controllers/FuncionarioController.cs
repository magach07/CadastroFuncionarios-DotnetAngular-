using ControleFuncionarios.Models;
using ControleFuncionarios.Service.FuncionarioService;
using Microsoft.AspNetCore.Mvc;

namespace ControleFuncionarios.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class FuncionarioController : ControllerBase
    {
        private readonly IFuncionarioService _funcionarioService;

        public FuncionarioController(IFuncionarioService funcionarioService)
        {
            _funcionarioService = funcionarioService;
        }

        [HttpGet]
        [Route("GetAllFuncionario")]
        public async Task<ActionResult<ServiceResponse<List<FuncionarioModel>>>> GetAllFuncionario()
        {
            return Ok(await _funcionarioService.GetAllFuncionario());
        }

        [HttpGet]
        [Route("GetFuncionarioById")]
        public async Task<ActionResult<ServiceResponse<FuncionarioModel>>> GetFuncionarioById(int id)
        {
            return Ok(await _funcionarioService.GetFuncionarioById(id));
        }

        [HttpPost]
        [Route("CreateFuncionario")]
        public async Task<ActionResult<ServiceResponse<List<FuncionarioModel>>>> CreateFuncionario(FuncionarioModel novoFuncionario)
        {
            return Ok(await _funcionarioService.CreateFuncionario(novoFuncionario));
        }

        [HttpPut]
        [Route("InactivateFuncionario")]
        public async Task<ActionResult<ServiceResponse<FuncionarioModel>>> InactivateFuncionario(int id)
        {
            return Ok(await _funcionarioService.InactivateFuncionario(id));
        }

        [HttpDelete]
        [Route("DeleteFuncionario")]
        public async Task<ActionResult<ServiceResponse<List<FuncionarioModel>>>> DeleteFuncionario(int id)
        {
            return Ok(await _funcionarioService.DeleteFuncionario(id));
        }

        [HttpPost]
        [Route("UpdateFuncionario")]
        public async Task<ActionResult<ServiceResponse<FuncionarioModel>>> UpdateFuncionario(FuncionarioModel editadoFuncionario)
        {
            return Ok(await _funcionarioService.UpdateFuncionario(editadoFuncionario));
        }
    }
}