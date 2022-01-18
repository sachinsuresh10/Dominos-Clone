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
    public class VegPizzasController : ApiController
    {
        private PizzaThirstEntities db = new PizzaThirstEntities();

        // GET: api/VegPizzas
        public IQueryable<VegPizza> GetVegPizzas()
        {
            return db.VegPizzas;
        }

        // GET: api/VegPizzas/5
        [ResponseType(typeof(VegPizza))]
        public async Task<IHttpActionResult> GetVegPizza(int id)
        {
            VegPizza vegPizza = await db.VegPizzas.FindAsync(id);
            if (vegPizza == null)
            {
                return NotFound();
            }

            return Ok(vegPizza);
        }

        // PUT: api/VegPizzas/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> PutVegPizza(int id, VegPizza vegPizza)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != vegPizza.vegid)
            {
                return BadRequest();
            }

            db.Entry(vegPizza).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!VegPizzaExists(id))
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

        // POST: api/VegPizzas
        [ResponseType(typeof(VegPizza))]
        public async Task<IHttpActionResult> PostVegPizza(VegPizza vegPizza)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.VegPizzas.Add(vegPizza);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = vegPizza.vegid }, vegPizza);
        }

        // DELETE: api/VegPizzas/5
        [ResponseType(typeof(VegPizza))]
        public async Task<IHttpActionResult> DeleteVegPizza(int id)
        {
            VegPizza vegPizza = await db.VegPizzas.FindAsync(id);
            if (vegPizza == null)
            {
                return NotFound();
            }

            db.VegPizzas.Remove(vegPizza);
            await db.SaveChangesAsync();

            return Ok(vegPizza);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool VegPizzaExists(int id)
        {
            return db.VegPizzas.Count(e => e.vegid == id) > 0;
        }
    }
}