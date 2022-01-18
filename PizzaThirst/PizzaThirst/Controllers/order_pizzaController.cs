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
    public class order_pizzaController : ApiController
    {
        private PizzaThirstEntities db = new PizzaThirstEntities();

        // GET: api/order_pizza
        public IQueryable<order_pizza> Getorder_pizza()
        {
            return db.order_pizza;
        }

        // GET: api/order_pizza/5
        [ResponseType(typeof(order_pizza))]
        public async Task<IHttpActionResult> Getorder_pizza(int id)
        {
            order_pizza order_pizza = await db.order_pizza.FindAsync(id);
            if (order_pizza == null)
            {
                return NotFound();
            }

            return Ok(order_pizza);
        }

        // PUT: api/order_pizza/5
        [ResponseType(typeof(void))]
        public async Task<IHttpActionResult> Putorder_pizza(int id, order_pizza order_pizza)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != order_pizza.orderid)
            {
                return BadRequest();
            }

            db.Entry(order_pizza).State = EntityState.Modified;

            try
            {
                await db.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!order_pizzaExists(id))
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

        // POST: api/order_pizza
        [ResponseType(typeof(order_pizza))]
        public async Task<IHttpActionResult> Postorder_pizza(order_pizza order_pizza)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.order_pizza.Add(order_pizza);
            await db.SaveChangesAsync();

            return CreatedAtRoute("DefaultApi", new { id = order_pizza.orderid }, order_pizza);
        }

        // DELETE: api/order_pizza/5
        [ResponseType(typeof(order_pizza))]
        public async Task<IHttpActionResult> Deleteorder_pizza(int id)
        {
            order_pizza order_pizza = await db.order_pizza.FindAsync(id);
            if (order_pizza == null)
            {
                return NotFound();
            }

            db.order_pizza.Remove(order_pizza);
            await db.SaveChangesAsync();

            return Ok(order_pizza);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool order_pizzaExists(int id)
        {
            return db.order_pizza.Count(e => e.orderid == id) > 0;
        }
    }
}