using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Controllers
{
    public class BuggyController : BaseAPIController
    {
        private readonly DataContext _context;

        public BuggyController(DataContext context)
        {
            _context = context;
        }

        [Authorize]
        [HttpGet("auth")]
        public ActionResult<string> GetSecret()
        {
            return "secret text";
        }

        [HttpGet("notFound")]
        public ActionResult<AppUser> GetNotFound()
        {
            var thing = _context.Users.Find(-1);

            if (thing == null) 
                return NotFound();

            return Ok(thing);
        }

        [HttpGet("serverError")]
        public ActionResult<string> GetServerError()
        {
            try
            {
                var thing = _context.Users.Find(-1);

                var result = thing.ToString();

                return Ok(result);

            }
            catch (Exception ex)
            {

                throw new Exception("Новая ошибочка гыгыгы", ex);
            }        
        }

        [HttpGet("badRequest")]
        public ActionResult<string> GetBadRequest()
        {
            return BadRequest("Very badrequest");
        }
    }
}
