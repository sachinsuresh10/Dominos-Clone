using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Description;
using PizzaThirst.Models;

namespace PizzaThirst.Controllers
{
    public class NonvegPizzasController : ApiController
    {
        private PizzaThirstEntities db = new PizzaThirstEntities();

        // GET: api/NonvegPizzas
        public IQueryable<NonvegPizza> GetNonvegPizzas()
        {
            return db.NonvegPizzas;
        }

        // GET: api/NonvegPizzas/5
        [ResponseType(typeof(NonvegPizza))]
        public async Task<IHttpActionResult> GetNonvegPizza(int id)
        {
            NonvegPizza nonvegPizza = await db.NonvegPizzas.FindAsync(id);
            if (nonvegPizza == null)
            {
                return NotFound();
            }

            return Ok(nonvegPizza);
        }

        // PUT: api/NonvegPizzas/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutNonvegPizza(int id, NonvegPizza nonvegPizza)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != nonvegPizza.Nvegid)
            {
                return BadRequest();
            }

            db.Entry(nonvegPizza).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!NonvegPizzaExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/NonvegPizzas
        [ResponseType(typeof(NonvegPizza))]
        public async Task<IHttpActionResult> PostNonvegPizza(NonvegPizza nonvegPizza)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.NonvegPizzas.Add(nonvegPizza);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = nonvegPizza.Nvegid }, nonvegPizza);
        }

        // DELETE: api/NonvegPizzas/5
        [ResponseType(typeof(NonvegPizza))]
        public async Task<IHttpActionResult> DeleteNonvegPizza(int id)
        {
            NonvegPizza nonvegPizza = await db.NonvegPizzas.FindAsync(id);
            if (nonvegPizza == null)
            {
                return NotFound();
            }

            db.NonvegPizzas.Remove(nonvegPizza);
            await db.SaveChangesAsync();

            return Ok(nonvegPizza);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool NonvegPizzaExists(int id)
        {
            return db.NonvegPizzas.Count(e => e.Nvegid == id) > 0;
        }
    }
}