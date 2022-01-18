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
    public class pizzasController : ApiController
    {
        private PizzaThirstEntities db = new PizzaThirstEntities();

        // GET: api/pizzas
        public IQueryable<pizza> Getpizzas()
        {
            return db.pizzas;
        }

        // GET: api/pizzas/5
        [ResponseType(typeof(pizza))]
        public async Task<IHttpActionResult> Getpizza(int id)
        {
            pizza pizza = await db.pizzas.FindAsync(id);
            if (pizza == null)
            {
                return NotFound();
            }

            return Ok(pizza);
        }

        // PUT: api/pizzas/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putpizza(int id, pizza pizza)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pizza.pizzaid)
            {
                return BadRequest();
            }

            db.Entry(pizza).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!pizzaExists(id))
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

        // POST: api/pizzas
        [ResponseType(typeof(pizza))]
        public async Task<IHttpActionResult> Postpizza(pizza pizza)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.pizzas.Add(pizza);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = pizza.pizzaid }, pizza);
        }

        // DELETE: api/pizzas/5
        [ResponseType(typeof(pizza))]
        public async Task<IHttpActionResult> Deletepizza(int id)
        {
            pizza pizza = await db.pizzas.FindAsync(id);
            if (pizza == null)
            {
                return NotFound();
            }

            db.pizzas.Remove(pizza);
            await db.SaveChangesAsync();

            return Ok(pizza);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool pizzaExists(int id)
        {
            return db.pizzas.Count(e => e.pizzaid == id) > 0;
        }
    }
}